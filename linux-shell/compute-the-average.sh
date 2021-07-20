#!/bin/bash
#
# https://www.hackerrank.com/challenges/bash-tutorials---compute-the-average/problem?h_r=next-challenge&h_v=zen
#
export LC_ALL=C.UTF-8

read numbers
i=0
sum=0
while [ $i -lt $numbers ]
    do
        read num
        ((sum+=$num))
        ((i++))
    done
printf "%.3f\n" $(echo "$sum / $numbers" | bc -l)