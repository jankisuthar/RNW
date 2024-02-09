//1
//2 3
//4 5 6
//7 8 9 10
#include<stdio.h>

int main()
{
	int rows,i,j;
	
	printf("Enter the number of rows:");
	scanf("%d",&rows);
	
	for(i=0;i<=rows;i++)
	{
		for(j=1;j<=rows-i;j++)
		{
			printf("%d ",j);
//			number++;	
		}
		printf("\n");
	}
	return 0;
}
