package com.javarush.task.pro.task05.task0511;

import java.util.Scanner;

/* 
Создаем двумерный массив
*/

public class Solution {
    public static int[][] multiArray;

    public static void main(String[] args) {
        //напишите тут ваш код
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        multiArray = new int[a][];
        for (int i = 0; i < a; i++) {
            int b = scan.nextInt();
            multiArray[i] = new int[b];
        }
     }
}
