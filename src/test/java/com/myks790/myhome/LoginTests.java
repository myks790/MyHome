package com.myks790.myhome;

import com.myks790.myhome.model.Account;
import com.myks790.myhome.repository.AccountRepository;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LoginTests {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public void saveAccount() {
        String username = null;
        String rawPassword = null;

        Account account = new Account();
        account.setUsername(username);
        account.setPassword(passwordEncoder.encode(rawPassword));
        account.setRole(Account.Role.valueOf("ROLE_ADMIN"));
        accountRepository.save(account);
    }

}
