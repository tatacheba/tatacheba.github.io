package com.javarush.task.pro.task05.task0508;

import java.util.Arrays;
import java.util.Scanner;

/* 
Удаляем одинаковые строки
*/

public class Solution {
    public static String[] strings;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        strings = new String[6];
        //напишите тут ваш код

        for (int i = 0; i < strings.length; i++) {
            strings[i] = scan.nextLine();
        }
        String[] strCopy = Arrays.copyOf(strings, strings.length);

        for (int i = 0; i < strings.length; i++) {
//

            for (int j = i + 1; j < strCopy.length; j++) {
                if (strings[i].equalsIgnoreCase(strCopy[j]) && (strCopy[j] != null)) {
                    strCopy[j] = null;
                    strCopy[i] = null;

                }

            }

        }
        strings = strCopy;


        for (
                int i = 0;
                i < strings.length; i++) {
            System.out.print(strings[i] + ", ");
        }

    }
}

