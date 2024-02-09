#include<stdio.h>

int main()
{
	char sign;
	
	printf("Enter any character : ");
	scanf("%c",&sign);
	
	if((sign>='a' && sign<='z') || (sign>='A' && sign<='Z'))
	{
		printf("This is Alphabet");
	}
	else if(sign>='0' && sign<='9')
	{
		printf("This is number");
	}
	else
	{
		printf("This is Special Character");
	}
	return 0;
}
