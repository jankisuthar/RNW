#include<stdio.h>

int main(){
	int age;
	
	printf("Enter your age : ");
	scanf("%d",&age);
	
	if(age<18)
	{
		printf("You are kid");
	}
	else if(age==18)
	{
		printf("you are young");
	}
	else if(age>18  && age<50)
	{
		printf("you are mature person");
	}
	else
	{
		printf("you are old");
	}
}
