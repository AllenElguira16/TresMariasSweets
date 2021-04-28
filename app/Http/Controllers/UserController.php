<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserController extends Controller
{
    public function SignUp(Request $request) {

        if (!$request->firstname || !$request->lastname || !$request->email || !$request->password) {
            return response()->json([
                'success' => false,
                'message' => 'inputs should not be empty',
            ]);
        }

        if (count_chars($request->firstname) <= 2) {
            return response()->json([
                'success' => false,
                'message' => 'firstname should be atleast 2 or more characters',
            ]);    
        }

        if (count_chars($request->lastname) <= 2) {
            return response()->json([
                'success' => false,
                'message' => 'firstname should be atleast 2 or more characters',
            ]);    
        }

        if (count_chars($request->password) <= 8) {
            return response()->json([
                'success' => false,
                'message' => 'password should be atleast 8 or more characters',
            ]);    
        }

        $id = User::insert([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Sign Up Successful, try logging in',
            'user' => User::find($id)
        ]);
    }

    public function SignIn(Request $request) {
        if ($request->session()->has('user')) {
            return response()->json([
                'success' => false,
                'message' => 'user already logged in',
            ]);
        }

        $user = User::where('email', $request->email)->first();

        if (!$request->email || !$request->password) {
            return response()->json([
                'success' => false,
                'message' => 'Inputs are empty',
            ]);
        }

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found',
            ]);
        }

        if ($user->password !== $request->password) {
            return response()->json([
                'success' => false,
                'message' => 'password did not match',
            ]);
        }
            
        $request->session()->put('user', $user);

        return response()->json([
            'success' => true,
            'message' => 'Sign in successful',
        ]);
    }
}
