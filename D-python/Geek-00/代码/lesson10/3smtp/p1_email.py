#! /usr/bin/env python
#coding=utf-8

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
from email.header import Header
from smtplib import SMTP_SSL
import configparser
import os.path as path
dir = path.dirname(__file__)
config = configparser.ConfigParser()
config.read(path.join(dir,'./config.ini'))


#qq邮箱smtp服务器
host_server = 'smtp.exmail.qq.com'
#sender_qq为发件人的qq号码
sender_qq = config['email']['email']
#pwd为qq邮箱的授权码
pwd = config['email']['psd']
#发件人的邮箱
sender_qq_mail = 'w@icey.cc'
#收件人邮箱
receiver = 'wangbingyang@doushen.com'

#邮件的正文内容
mail_content = '你好啊,测试邮件 加图片'
#邮件标题
mail_title = 'python测试邮件：你好👌'

#ssl登录
smtp = SMTP_SSL(host_server,port=465)
#set_debuglevel()是用来调试的。参数值为1表示开启调试模式，参数值为0关闭调试模式
smtp.set_debuglevel(1)
smtp.ehlo(host_server)
smtp.login(sender_qq, pwd)

mail_body = MIMEText(mail_content, "plain", 'utf-8')
msg = MIMEMultipart()
msg["Subject"] = Header(mail_title, 'utf-8')
msg["From"] = sender_qq_mail
msg["To"] = receiver
msg.attach(mail_body)

fp = open(path.join(dir,"./book1.png"), 'rb')
images = MIMEImage(fp.read())
fp.close()
images.add_header('Content-ID', '<image1>')
images["Content-Disposition"] = 'attachment; filename="testimage.png"'
msg.attach(images)

smtp.sendmail(sender_qq_mail, receiver, msg.as_string())
smtp.quit()