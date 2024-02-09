#include<stdio.h>

//array : array can store one or more values in a single variable
int main()
{
	int i;
	int arr[5] = {10,20,30,40,50};
	
//	printf("%d\n",arr[0]);
//	printf("%d\n",arr[1]);
//	printf("%d\n",arr[2]);
//	printf("%d\n",arr[3]);
//	printf("%d\n",arr[4]);

	for(i=0;i<5;i++)
	{
		printf("%d\n",arr[i]);
	
	}
	return 0;
}
