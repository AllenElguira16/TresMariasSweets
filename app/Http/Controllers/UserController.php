<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserController extends Controller
{
    public function SignUp(Request $request) {

        if ($request->firstname === '' || $request->lastname === '' || $request->email === '' || $request->password === '') {
            return response()->json([
                'errors' => true,
                'message' => 'inputs should not be empty',
            ]);    
        }

        if (count_chars($request->firstname) <= 2) {
            return response()->json([
                'errors' => true,
                'message' => 'firstname should be atleast 2 or more characters',
            ]);    
        }

        if (count_chars($request->lastname) <= 2) {
            return response()->json([
                'errors' => true,
                'message' => 'firstname should be atleast 2 or more characters',
            ]);    
        }

        if (count_chars($request->password) <= 8) {
            return response()->json([
                'errors' => true,
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
            'message' => 'Sign Up Successful, try logging in',
            'user' => User::find($id)
        ]);
    }
}
