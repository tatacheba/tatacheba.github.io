package com.javarush.task.pro.task11.task1109;

/* 
Объекты внутренних и вложенных классов
*/

public class Solution {
    public static void main(String[] args) {
        //напишите тут ваш код
        Outer o=new Outer();
        Outer.Nested n=new Outer.Nested();
        Outer.Inner i =Outer.Inner;
    }
}
