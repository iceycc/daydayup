#! /usr/bin/env python
#coding=utf-8

from email.mime.text import MIMEText
from email.header import Header
from smtplib import SMTP_SSL
import passwd

#qq邮箱smtp服务器
host_server = 'smtp.qq.com'
#sender_qq为发件人的qq号码
sender_qq = '15055495@qq.com'
#pwd为qq邮箱的授权码
pwd = passwd.pwd 
#发件人的邮箱
sender_qq_mail = '15055495@qq.com'
#收件人邮箱
receiver = '15055495@qq.com'

#邮件的正文内容
mail_content = '你好，这是使用python登录qq邮箱发邮件的测试'
#邮件标题
mail_title = 'Python测试邮件'

#ssl登录
smtp = SMTP_SSL(host_server)
#set_debuglevel()是用来调试的。参数值为1表示开启调试模式，参数值为0关闭调试模式
smtp.set_debuglevel(1)
smtp.ehlo(host_server)
smtp.login(sender_qq, pwd)

msg = MIMEText(mail_content, "plain", 'utf-8')
msg["Subject"] = Header(mail_title, 'utf-8')
msg["From"] = sender_qq_mail
msg["To"] = receiver
smtp.sendmail(sender_qq_mail, receiver, msg.as_string())
smtp.quit()