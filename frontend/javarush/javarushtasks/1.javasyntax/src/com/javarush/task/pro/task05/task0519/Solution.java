package com.javarush.task.pro.task05.task0519;

import java.util.Arrays;
import java.util.Scanner;

/* 
Есть ли кто?
*/

public class Solution {

    public static int[] array = {9, 8, 7, 6, 5, 4, 3, 2, 1};
    public static int element = 5;

    public static void main(String[] args) {
        //напишите тут ваш код
        int[] arrayCopy=Arrays.copyOf(array,array.length);
        Arrays.sort(arrayCopy);
//        System.out.println(Arrays.binarySearch(arrayCopy,element));
        if(Arrays.binarySearch(arrayCopy,element)<0){
            System.out.println(false);
        }else{
            System.out.println(true);
        }

        Scanner sc = new Scanner(System.in);
        sc.nextInt();
    }
}
