package com.javarush.task.pro.task07.task0706;

/* 
Странное деление
*/

public class Solution {
    public static void main(String[] args) {
        //напишите тут ваш код
        div((9D/0D),(1D/0D));

    }

    public static void div(double a, double b){
        System.out.println(b/a);
    }
}
