<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

//========================Register Login ====================
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('forget-password', [AuthController::class, 'forget_password']);
Route::post('reset-password', [AuthController::class, 'reset_password']);
//======================= Logout====================
Route::middleware(['auth:sanctum'])->group(function() {
    Route::post('logout', [AuthController::class, 'logout']);
});


//===========================Admin==============================
Route::middleware(['auth:sanctum', 'isApiAdmin'])->group(function() {
    //protected
    Route::get('/checkingAuthenticated', function() {
        return response()->json(['message' => 'You are in', 'status'=>200], 200);
    });

});
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/