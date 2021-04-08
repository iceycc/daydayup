/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type TypeOfMode = number;

// 二进制写法的意义？？？
// var a = 0b000
// var b =  0b001
// var c = 0b010
// var d = 0b100
// var mode = a
// 如果判断mode是否时b：mode & b  -> 0 说明不是
// mode = mode | b
export const NoContext = 0b000;
export const ConcurrentMode = 0b001;
export const StrictMode = 0b010;
export const ProfileMode = 0b100;
