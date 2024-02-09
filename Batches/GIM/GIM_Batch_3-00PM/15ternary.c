#include<stdio.h>

int main(){
	int age ;
	
	printf("Enter your Age : ");
	scanf("%d",&age);
	(age>=18)?printf("you are Adult"):printf(" you are Child");
	return 0;
}
