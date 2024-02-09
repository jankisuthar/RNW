#include<stdio.h>

int main(){
	int age;
	
	printf("enter your age ");
	scanf("%d",&age);
	
	(age>=18)?printf("you are young"):printf("you are kid");
	return 0;
}
