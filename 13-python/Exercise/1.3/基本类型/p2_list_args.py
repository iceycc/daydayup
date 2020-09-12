class Custom(object):
    # 顾客
    def __init__(self,name,goods = None):
        self.name = name
        if goods is None:
            goods = []
        self.goods = goods
    def buy(self,goods_name):
        # 购买
        self.goods.append(goods_name)
    def pay_up(self):
        print(self.name)
        for item in self.goods:
            print(item)

custom1 = Custom('Tom')
custom1.buy('apple')

custom2 = Custom('Jerry')
custom2.buy('cake')

custom1.pay_up()
custom2.pay_up()
