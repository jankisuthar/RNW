#include<stdio.h>

int main(){
	int a = 20,b = 4;
	int c;
	
	
	//arithmatic operator
	c = a+b;
	printf("a+b = %d\n",c);
	c = a-b;
	printf("a-b = %d\n",c);
	c = a*b;
	printf("a*b = %d\n",c);
	c = a/b;
	printf("a/b = %d\n",c);
	c = a%b;
	printf("a % b = %d\n",c);
	
	//unary operator
	c = ++a;
	printf("++a = %d\n",c);
	c = --a;
	printf("--a = %d\n",c);
	c = a++;
	printf("a++ = %d\n",c);
	c = a--;
	printf("a-- = %d\n",c);
	
	//assignment operator
	c=a;
	printf("c = a = %d\n",c);
	c+=a;
	printf("c += a = %d\n",c);
	c-=a;
	printf("c -= a = %d\n",c);
	c*=a;
	printf("c *= a = %d\n",c);
	c/=a;
	printf("c /= a = %d\n",c);

	
//	relational operator
	printf("b == a = %d\n",b==a);
	printf("b != a = %d\n",b!=a);
	printf("b > a = %d\n",b>a);
	printf("b < a = %d\n",b<a);
	printf("b <= a = %d\n",b<=a);
	printf("b >= a = %d\n",b>=a);
	return 0;
}
