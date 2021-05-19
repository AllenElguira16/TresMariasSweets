<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CakeController; 
use App\Http\Controllers\UserController; 
use App\Http\Controllers\OrderController; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('/cakes')->group(function () {
    Route::get('/', [CakeController::class, 'cakeList']);
    Route::post('/', [CakeController::class, 'addCake']);
    Route::put('/{id}', [CakeController::class, 'editCake']);
    Route::delete('/{id}', [CakeController::class, 'deleteCake']);
});


Route::prefix('/user')->group(function () {
    Route::get('/auth', [UserController::class, 'GetUser']);

    Route::post('/auth/sign-up', [UserController::class, 'SignUp']);
    Route::post('/auth/sign-in', [UserController::class, 'SignIn']);
    Route::post('/auth/sign-out', [UserController::class, 'DestroyUserSession']);
    
    Route::put('/auth/{id}', [UserController::class, 'EditAccount']);
    
    Route::delete('/auth/{id}', [UserController::class, 'DeleteUser']);
});

Route::prefix('/orders')->group(function () {
    Route::get('/', [OrderController::class, 'orderList']);
    Route::post('/', [OrderController::class, 'makeOrder']);
});
