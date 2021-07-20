#!/bin/bash
#
# https://www.hackerrank.com/challenges/bash-tutorials---arithmetic-operations/problem
#
export LC_ALL=C.UTF-8

read expression
printf "%.3f\n" $(echo "$expression" | bc -l)