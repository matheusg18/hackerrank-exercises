#!/bin/bash
#
# https://www.hackerrank.com/challenges/bash-tutorials---arithmetic-operations/problem
#
read expression
printf "%.3f\n" $(echo "$expression" | bc -l)