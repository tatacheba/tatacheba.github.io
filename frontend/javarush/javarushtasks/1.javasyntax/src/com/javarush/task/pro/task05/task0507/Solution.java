package com.javarush.task.pro.task05.task0507;

import java.util.Arrays;
import java.util.Scanner;

/* 
Максимальное из N чисел
*/

public class Solution {
    public static int[] array;

    public static void main(String[] args) throws Exception {
        //напишите тут ваш код
        Scanner scan=new Scanner(System.in);
        int a=scan.nextInt();
        array=new int[a];
        for (int i = 0; i < array.length; i++) {
            array[i]= scan.nextInt();
        }
        int max=array[0];
        for (int i = 0; i < array.length; i++) {
           if(array[i]>max){
               max=array[i];
           }
        }
        System.out.println(max);
    }
}
