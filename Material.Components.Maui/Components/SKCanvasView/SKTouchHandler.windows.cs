﻿using Microsoft.UI.Input;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Input;

namespace SkiaSharp.Views.Maui.Handlers;
internal class SKTouchHandler
{
    private Action<SKTouchEventArgs> onTouchAction;
    private Func<double, double, SKPoint> scalePixels;

    public SKTouchHandler(Action<SKTouchEventArgs> onTouchAction, Func<double, double, SKPoint> scalePixels)
    {
        this.onTouchAction = onTouchAction;
        this.scalePixels = scalePixels;
    }

    public void SetEnabled(FrameworkElement view, bool enableTouchEvents)
    {
        if (view != null)
        {
            view.PointerEntered -= this.OnPointerEntered;
            view.PointerExited -= this.OnPointerExited;
            view.PointerPressed -= this.OnPointerPressed;
            view.PointerMoved -= this.OnPointerMoved;
            view.PointerReleased -= this.OnPointerReleased;
            view.PointerCanceled -= this.OnPointerCancelled;
            view.PointerWheelChanged -= this.OnPointerWheelChanged;
            if (enableTouchEvents)
            {
                view.PointerEntered += this.OnPointerEntered;
                view.PointerExited += this.OnPointerExited;
                view.PointerPressed += this.OnPointerPressed;
                view.PointerMoved += this.OnPointerMoved;
                view.PointerReleased += this.OnPointerReleased;
                view.PointerCanceled += this.OnPointerCancelled;
                view.PointerWheelChanged += this.OnPointerWheelChanged;
            }
        }
    }

    public void Detach(FrameworkElement view)
    {
        // clean the view
        this.SetEnabled(view, false);

        // remove references
        this.onTouchAction = null;
        this.scalePixels = null;
    }

    private void OnPointerEntered(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.Entered, args);
    }

    private void OnPointerExited(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.Exited, args);
    }

    private void OnPointerPressed(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.Pressed, args);

        if (args.Handled)
        {
            if (sender is FrameworkElement view)
            {
                view.ManipulationMode = ManipulationModes.All;
                view.CapturePointer(args.Pointer);
            }
        }
    }

    private void OnPointerMoved(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.Moved, args);
    }

    private void OnPointerReleased(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.Released, args);

        if (sender is FrameworkElement view)
            view.ManipulationMode = ManipulationModes.System;
    }

    private void OnPointerCancelled(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.Cancelled, args);
    }

    private void OnPointerWheelChanged(object sender, PointerRoutedEventArgs args)
    {
        args.Handled = this.CommonHandler(sender, SKTouchAction.WheelChanged, args);
    }

    private bool CommonHandler(object sender, SKTouchAction touchActionType, PointerRoutedEventArgs evt)
    {
        if (this.onTouchAction == null || this.scalePixels == null)
            return false;

        var view = sender as FrameworkElement;

        var id = evt.Pointer.PointerId;

        var pointerPoint = evt.GetCurrentPoint(view);
        var windowsPoint = pointerPoint.Position;
        var skPoint = this.scalePixels(windowsPoint.X, windowsPoint.Y);

        var mouse = GetMouseButton(pointerPoint);
        var device = GetTouchDevice(evt);

        var wheelDelta = pointerPoint?.Properties?.MouseWheelDelta ?? 0;

        var args = new SKTouchEventArgs(id, touchActionType, mouse, device, skPoint, evt.Pointer.IsInContact, wheelDelta);
        this.onTouchAction(args);
        return args.Handled;
    }

    private static SKTouchDeviceType GetTouchDevice(PointerRoutedEventArgs evt)
    {
        var device = SKTouchDeviceType.Touch;
        switch (evt.Pointer.PointerDeviceType)
        {
            case PointerDeviceType.Pen:
                device = SKTouchDeviceType.Pen;
                break;
            case PointerDeviceType.Mouse:
                device = SKTouchDeviceType.Mouse;
                break;
            case PointerDeviceType.Touch:
                device = SKTouchDeviceType.Touch;
                break;
        }

        return device;
    }

    private static SKMouseButton GetMouseButton(PointerPoint pointerPoint)
    {
        var properties = pointerPoint.Properties;

        var mouse = SKMouseButton.Unknown;

        // this is mainly for touch
        if (properties.IsLeftButtonPressed)
        {
            mouse = SKMouseButton.Left;
        }
        else if (properties.IsMiddleButtonPressed)
        {
            mouse = SKMouseButton.Middle;
        }
        else if (properties.IsRightButtonPressed)
        {
            mouse = SKMouseButton.Right;
        }

        // this is mainly for mouse
        switch (properties.PointerUpdateKind)
        {
            case PointerUpdateKind.LeftButtonPressed:
            case PointerUpdateKind.LeftButtonReleased:
                mouse = SKMouseButton.Left;
                break;
            case PointerUpdateKind.RightButtonPressed:
            case PointerUpdateKind.RightButtonReleased:
                mouse = SKMouseButton.Right;
                break;
            case PointerUpdateKind.MiddleButtonPressed:
            case PointerUpdateKind.MiddleButtonReleased:
                mouse = SKMouseButton.Middle;
                break;
            case PointerUpdateKind.XButton1Pressed:
            case PointerUpdateKind.XButton1Released:
            case PointerUpdateKind.XButton2Pressed:
            case PointerUpdateKind.XButton2Released:
            case PointerUpdateKind.Other:
            default:
                break;
        }

        return mouse;
    }
}
