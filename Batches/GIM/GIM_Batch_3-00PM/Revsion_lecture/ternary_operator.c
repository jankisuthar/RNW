#include<stdio.h>

int main(){
	int age;
	
	printf("Enter your age : ");
	scanf("%d",&age);
	
	(age<18)?printf("you are child"):printf("you are adult");
	return 0;
}
