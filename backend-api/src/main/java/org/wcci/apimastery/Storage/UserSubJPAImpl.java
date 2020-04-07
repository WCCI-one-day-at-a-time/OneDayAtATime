package org.wcci.apimastery.Storage;

import org.springframework.stereotype.Service;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserSubJPAImpl implements SubmissionStorage {
    private UserSubmissionRepository userSubRepo;

    public UserSubJPAImpl(UserSubmissionRepository userSubRepo){
        this.userSubRepo = userSubRepo;
    }

    @Override
    public Optional<UserSubmission> findSubById(Long id) {
        return userSubRepo.findById(id);
    }

    @Override
    public Collection<UserSubmission> findAllSubs() {
        return (Collection<UserSubmission>) userSubRepo.findAll();
    }

    @Override
    public void store(UserSubmission submissionToAdd) {
        userSubRepo.save(submissionToAdd);
    }

}


