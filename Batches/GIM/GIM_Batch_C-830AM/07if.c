#include<stdio.h>

int main(){
	int age;
	
	printf("Enter your age :");
	scanf("%d",&age);

	if(age>=18)
	{
		printf("you are eligible for voting");
	}	
	else
	{
		printf("you are kid");
	}
	return 0;
}
