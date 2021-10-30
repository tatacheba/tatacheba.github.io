package com.javarush.task.pro.task08.task0817;

public class Solution {

    public static void main(String[] args) {
        int a = 3;
//        int b = a++ + (--a * a++);
        int b = ++a + (a-- * ++a);
//        int b=a--;
//        int c=++a;
//        int d=a++;
//        int f=c*d;
//        b=b+f;


        System.out.println(b);
    }
}