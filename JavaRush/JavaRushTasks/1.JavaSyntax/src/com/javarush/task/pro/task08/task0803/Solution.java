package com.javarush.task.pro.task08.task0803;

import java.util.Arrays;
import java.util.Scanner;

/* 
Минимальный элемент массива
*/

public class Solution {

    public static void main(String[] args) {
        int[] intArray = getArrayOfTenElements();

        System.out.println(min(intArray));
    }

    public static int min(int[] ints) {
        //напишите тут ваш код
        int min = ints[0];
        for (int i = 0; i < ints.length - 1; i++) {
//            if (min > Math.min(ints[i], ints[i + 1])) {
//                min = Math.min(ints[i], ints[i + 1]);
//            }
            min = min > Math.min(ints[i], ints[i + 1]) ? min = Math.min(ints[i], ints[i + 1]) : min;
        }

        return min;
    }

    public static int[] getArrayOfTenElements() {
        //напишите тут ваш код
        Scanner scn = new Scanner(System.in);
        int[] a = new int[10];
        for (int i = 0; i < a.length; i++) {
            a[i] = scn.nextInt();
        }
        return a;
    }
}
