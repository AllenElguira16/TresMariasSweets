<?php

namespace App\Http\Controllers;

use Closure;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function orderList(Request $request) {
        return [
            'success' => true,
            'order' => Order::where('status', $request->query('status'))->get()
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
            'success' => false,
            'message' => 'Order Success'
        ];
    }
}