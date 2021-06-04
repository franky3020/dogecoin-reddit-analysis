# Analysis dogecoin reddit subscribers 

## [Go to see our subscribers number increasing](http://www.dogecoin.idv.tw/)

## What is it?
This is to see the increase in the number of our subscribers.
![](./readme_img/complete.PNG)

## How to build

1. Clone project
2. Change password `GF_SECURITY_ADMIN_PASSWORD: 42069` in docker-compose.yml
3. Run `docker-compose up -d --build`
4. Open web on 80 port
5. Login user is `admin`, password is which you set in `step 2`
6. Link Prometheus

    1. 
    ![](./readme_img/6.1.PNG)

    2. 
    ![](./readme_img/6.2.PNG)

    3.  type `http://prometheus:9090` in URL row
    ![](./readme_img/6.3.PNG)

7. Import dashboard 

    1. 
    ![](./readme_img/7.1.PNG)

    2. Choose `JSON_Model.json` file which I put it in this project.
    ![](./readme_img/7.2.PNG)

8. Complete
![](./readme_img/complete.PNG)
