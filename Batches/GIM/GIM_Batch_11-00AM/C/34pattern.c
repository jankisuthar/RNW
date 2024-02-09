//*
//* *
//* * *
//* * * *
//* * * * *

#include<stdio.h>
int main()
{
	int i,j;
	
//	printf("Enter the number of rows: ");
//	scanf("%d",&rows);
	
	
	for(i=0;i<=5;i++)   //number of rows
	{
		for(j=1;j<=5-i;j++)  //to print the *
		{
			printf("* ");
		}
		printf("\n");
	}
	return 0;
}
