package com.javarush.task.pro.task10.task1012;

import java.util.*;


/* 
Дефрагментация памяти
*/

public class Memory {

    public static void main(String[] args) {
        String[] memory = {"object15", null, null, "object2", null, null, null, "object32", null, "object4"};
        executeDefragmentation(memory);
        System.out.println(Arrays.toString(memory));
    }


    public static void executeDefragmentation(String[] array) {
        List<String> a = Arrays.asList(array);
//        Arrays.sort(array);
        Collections.sort(a, Comparator.naturalOrder());
        //напишите тут ваш код
    }
}
