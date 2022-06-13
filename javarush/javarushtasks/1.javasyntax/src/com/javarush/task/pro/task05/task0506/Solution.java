package com.javarush.task.pro.task05.task0506;

import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.Scanner;

/* 
Минимальное из N чисел
*/

public class Solution {
    public static int[] array;
    public static void main(String[] args) throws Exception {
        //напишите тут ваш код
        Scanner scan=new Scanner(System.in);
int a= scan.nextInt();
        array=new int[a];
        for (int i = 0; i <array.length ; i++) {
            array[i]= scan.nextInt();
        }
        int min=array[0];
        for (int i = 0; i < array.length; i++) {

            if(array[i]<min){
                min=array[i];
            }
        }
        System.out.println(min);
    }
}
