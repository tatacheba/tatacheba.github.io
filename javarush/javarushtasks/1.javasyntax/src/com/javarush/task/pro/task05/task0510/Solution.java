package com.javarush.task.pro.task05.task0510;

/* 
Треугольный массив
*/

public class Solution {

    public static int[][] result = new int[10][];

    public static void main(String[] args) {
        //напишите тут ваш код
        for (int i = 0; i < 10; i++) {
            for (int j = i + 1; j <= i + 1; j++) {
                result[i] = new int[j];
//                result[i][j]=i+j;
            }
        }

        for (int i = 0; i < result.length; i++) {
            for (int j = 0; j < result[i].length; j++) {
                result[i][j]=i+j;
                System.out.print(result[i][j] + " ");
            }
            System.out.println();
        }

    }
}
