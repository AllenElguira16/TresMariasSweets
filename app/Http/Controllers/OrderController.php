<?php

namespace App\Http\Controllers;

use Closure;
use App\Models\Cake;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function orderList(Request $request) {
        $status = $request->query('status');
        $user = $request->session()->get('user');

        $where = [
            ['status', '=', $status],
        ];

        if ($request->exists('is_mine')) {
            array_push($where, ['user_id', '=', $user->id]);
        }

        $orders = Order::where($where)->get();

        return [
            'success' => true,
            'orders' => $orders->map(function ($order) use ($user) {
                return [
                    'id' => $order->id,
                    'cake' => Cake::find($order->cake_id),
                    'user' => $user,
                    'instructions' => $order->instructions,
                    'quantity' => $order->quantity,
                    'picture' => $order->picture
                ];
            })
        ];
    }

    public function makeOrder(Request $request) {
        $user = $request->session()->get('user');

        $orders = array_map(function (array $order) use ($user) {

            $order = (object) $order;

            return [
                'user_id' => $user->id,
                'cake_id' => $order->cake_id,
                'instructions' => $order->instructions,
                'picture' => $order->picture,
                'quantity' => $order->quantity,
                'status' => $order->status
            ];
        }, $request->order);

        Order::insert($orders);

        return [
            'success' => true,
            'message' => 'Order Success'
        ];
    }

    public function changeOrderStatus(Request $request) {
        $order = Order::where('id', $request->id)
            ->update([
                'status' => $request->status
            ]
        );

        return [
            'success' => true,
            'message' => 'Order Success',
        ];
    }
}