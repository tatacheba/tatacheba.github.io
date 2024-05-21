package com.javarush.task.pro.task05.task0509;

/* 
Таблица умножения
*/

public class Solution {

    public static int[][] MULTIPLICATION_TABLE = new int[10][10];

    public static void main(String[] args) {
        //напишите тут ваш код
//        System.out.print( "ddsds ");
        for (int i = 1; i <= 10; i++) {
            for (int j = 1; j <= 10; j++) {
                MULTIPLICATION_TABLE[i - 1][j - 1] = (i * j);

            }
        }
        for (int i = 0; i < MULTIPLICATION_TABLE.length; i++) {
            for (int j = 0; j < MULTIPLICATION_TABLE[i].length; j++) {
                if (j == MULTIPLICATION_TABLE[i].length-1) {
                    System.out.println(MULTIPLICATION_TABLE[i][j] + " ");
                } else
                    System.out.print(MULTIPLICATION_TABLE[i][j] + " ");
            }
//                if (j == MULTIPLICATION_TABLE[i].length) {
//                    System.out.println(i * j + ' ');
//                } else {
//                    System.out.print(i * j + ' ');
//                }
//            }
        }
    }
}
