FROM haproxy:2.1

COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

WORKDIR /etc/haproxy

CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"] 