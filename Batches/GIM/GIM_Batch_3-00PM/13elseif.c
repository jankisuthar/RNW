#include<stdio.h>

int main()
{
	int age = 18;
	if(age > 18)
	{
		printf("you are elligible for voting!");
	}
	else if(age <= 18)
	{
		printf("you are elligible for applying voting card!");
	}
	else
	{
		printf("you are not elligible for voting!");
	}
	return 0;
}
