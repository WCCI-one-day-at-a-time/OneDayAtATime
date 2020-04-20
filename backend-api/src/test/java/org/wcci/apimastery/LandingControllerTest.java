package org.wcci.apimastery;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.wcci.apimastery.Controllers.LandingController;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;
import org.wcci.apimastery.Storage.SubmissionStorage;
import org.wcci.apimastery.Storage.UserSubJPAImpl;

import java.util.Collection;
import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;


public class LandingControllerTest {
    private UserSubmission testUserSubmission;
    private LandingController underTest;
    private UserSubmissionRepository userSubmissionRepository;
    private UserSubJPAImpl submissionStorage;

    @BeforeEach
    void setUp(){
        userSubmissionRepository =  mock(UserSubmissionRepository.class);
        submissionStorage = new UserSubJPAImpl(userSubmissionRepository);
        underTest = new LandingController(userSubmissionRepository);
        testUserSubmission = new UserSubmission();
        when(userSubmissionRepository.findAll()).thenReturn(Collections.singletonList(testUserSubmission));

    }


    @Test
    public void retrieveUserSubmissionReturnsListOfSubmissions(){
        underTest.retrieveUserSubmission();
        verify(userSubmissionRepository).findAll();
    }

    @Test
    public void shouldBeAbleToAddUserSubmissions(){
        userSubmissionRepository.save(testUserSubmission);
        underTest.addNewSubmission(testUserSubmission);
        Collection<UserSubmission>  result = underTest.retrieveUserSubmission();
        verify(userSubmissionRepository).findAll();

    }


}


