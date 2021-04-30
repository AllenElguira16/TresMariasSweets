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

        $user = User::find($id);
        $request->session()->put('user', $user);

        return response()->json([
            'success' => true,
            'message' => 'Sign Up Successful',
            'user' => $user
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
            'user' => $user
        ]);
    }

    public function EditAccount(Request $request) {

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

        User::find($request->id)->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password    
        ]);

        $user = User::find($request->id);

        return response()->json([
            'success' => true,
            'message' => 'Edit Account Successful',
            'user' => $user
        ]);
    }

    public function DeleteUser(Request $request) {
        if (!$request->session()->has('user')) {
            return [
                'success' => false,
                'message' => 'You\'re not currently signed in'
            ];    
        }

        $user = User::where('id', $request->id);

        if (!$user) {
            return [
                'success' => false,
                'message' => 'Incorrect user id'
            ];
        }

        $user = $user->delete();
        $request->session()->flush();

        if (!$user) {
            return [
                'success' => false,
                'message' => 'Error deleting user'
            ];
        }

        return [
            'success' => true,
            'message' => 'User deleted'
        ];
    }

    public function GetUser(Request $request) {
        if (!$request->session()->has('user')) {
            return [
                'success' => false,
                'message' => 'You\'re not currently signed in'
            ];    
        }

        $user = $request->session()->get('user');
        $user = User::find($user->id);
        
        return [
            'success' => true,
            'user' => [
                'id' => $user->id,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'email' => $user->email,
            ]
        ];
    }

    public function DestroyUserSession(Request $request) {
        if (!$request->session()->has('user')) {
            return [
                'success' => false,
                'message' => 'You\'re not currently signed in'
            ];    
        }
        
        $request->session()->flush();
        
        if ($request->session()->has('user')) {
            return [
                'success' => false,
                'message' => 'Error signing out'
            ];    
        }

        return [
            'success' => true,
            'message' => 'Signout Successfully'
        ];
    }
}
