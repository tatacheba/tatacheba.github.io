package com.javarush.task.pro.task05.task0516;

import java.beans.DefaultPersistenceDelegate;
import java.util.Arrays;

/* 
Заполняем массив
*/

public class Solution {

    public static int[] array = new int[20];
    public static int valueStart = 10;
    public static int valueEnd = 13;

    public static void main(String[] args) {
        //напишите тут ваш код
        int halfArray;
        if (array.length % 2 == 0) {
            halfArray = array.length / 2;
        } else {
            halfArray = (array.length / 2) + 1;
        }

        Arrays.fill(array, 0, halfArray, valueStart);
        Arrays.fill(array, halfArray, array.length, valueEnd);


        System.out.println(Arrays.toString(array));
    }
}
