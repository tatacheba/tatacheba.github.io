package com.javarush.task.pro.task08.task0809;

/* 
Counter

*/
public class Solution {

    public static void main(String[] args) throws InterruptedException {
        printNumbers();
    }

    public static void printNumbers() throws InterruptedException {
        System.out.println(1);
        for (int i = 2; i <= 10; i++) {
            Thread.sleep(1,300000);
            System.out.println(i);

        }

        //напишите тут ваш код
    }
}
