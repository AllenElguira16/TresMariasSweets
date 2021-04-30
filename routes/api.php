<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CakeController; 
use App\Http\Controllers\UserController; 

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

Route::get('/cakes', [CakeController::class, 'cakeList']);


Route::prefix('/user')->group(function () {
    Route::post('/sign-up', [UserController::class, 'SignUp']);
    Route::post('/sign-in', [UserController::class, 'SignIn']);
    Route::put('/edit-account', [UserController::class, 'EditAccount']);
    Route::get('/', [UserController::class, 'GetUser']);
    Route::delete('/sign-out', [UserController::class, 'DestroyUserSession']);
});
