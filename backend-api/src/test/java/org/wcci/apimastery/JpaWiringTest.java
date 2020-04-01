package org.wcci.apimastery;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.wcci.apimastery.Repositories.EmotionRepository;
import org.wcci.apimastery.Repositories.ResponseRepository;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaWiringTest {
    @Autowired
    private EmotionRepository emotionRepo;

    @Autowired
    private ResponseRepository responseRepo;
    @Autowired
    private TestEntityManager entityManager;



    @Test
    public void responseShouldHaveEmotion() {
        Response testResponse = new Response();

        responseRepo.save(testResponse);


        entityManager.flush();
        entityManager.clear();
    }
//       Response retrievedResponse = responseRepo.findById(testResponse.getId()).get();
//
//        assertThat(retrievedEmotion.getResponse()).contains(retrievedResponse);
//
//    }

//    @Test
//    public ratingShouldHaveResponse(){
//        Response testResponse = new Response();
//
//        responseRepo.save(testResponse);
//    }




}