#include<stdio.h>

int main()
{
	int arr[3][2]={{10,20},{30,40},{50,60}};
	
	printf("Numbers: %d\n",arr[0][1]);
	printf("Numbers: %d\n",arr[2][0]);
	printf("Numbers: %d\n",arr[1][0]);
	printf("Numbers: %d",arr[2][1]);
	return 0;
}
