package org.global.ecp.hackathon.app.order;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.email.EmailService;
import org.global.ecp.hackathon.app.order.model.Order;
import org.global.ecp.hackathon.app.order.model.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private EmailService emailService;

    // TODO - Task 9: implement this method
    public UUID createOrder(final OrderRequest orderRequest) {
        if (orderRequest.getBasket().isEmpty()) {
            log.error("Basket is empty");
        }

        // 1. Generate a random order ID using UUID.randomUUID()
        UUID orderId = UUID.randomUUID();

        // 2. generate a LocalDateTime object using LocalDateTime.now()
        LocalDateTime orderDate = LocalDateTime.now();

        // 3. create a new Order object using the OrderRequest object and the generated
        // order ID and order date
        Order order = new Order(orderId, orderDate, orderRequest.getTotalCost(),
                orderRequest.getBasket().getBasketProducts());

        // 4. Return null in the createOrder() method if the order is null
        if (order == null) {
            return null;
        }

        // 5. Save the order using the orderRepository
        orderRepository.save(order);
        return orderId;

    }

    public List<Order> getAllOrders() {

        return orderRepository.getAll();
    }

    // TODO - Task 12: create a complete order method here
}
