#include<stdio.h>

int main(){
	char alpha = 'C';
	
	switch(alpha)
	{
		case 'A':
			printf("value is A");
			break;
		case 'B':
			printf("value is B");
			break;
		case 'C':
			printf("value is C");
			break;
		default:
			printf("no match found!");
			
	}
	return 0;
}
