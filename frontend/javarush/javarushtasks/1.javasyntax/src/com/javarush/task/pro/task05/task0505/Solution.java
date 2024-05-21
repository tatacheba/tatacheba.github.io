package com.javarush.task.pro.task05.task0505;

import java.net.SocketOption;
import java.util.Arrays;
import java.util.Scanner;

/* 
Reverse
*/

public class Solution {
    public static void main(String[] args) {
        //напишите тут ваш код
        Scanner scan = new Scanner(System.in);

        int a = scan.nextInt();
        int[] arr = new int[a];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = scan.nextInt();
        }
        if (a > 0 && a%2!=0) {
            for (int i = 0; i < arr.length; i++) {
                System.out.println(arr[i]);
            }
        }else{
            for (int i = arr.length-1; i >= 0; i--) {
                System.out.println(arr[i]);
            }
        }
    }


}
