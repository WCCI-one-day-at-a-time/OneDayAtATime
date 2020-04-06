package org.wcci.apimastery.Storage;

import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;

import java.util.Collection;
import java.util.Optional;

public interface SubmissionStorage {

    void store(UserSubmission userSubmission);

    Optional<UserSubmission> findSubById(Long id);

    Collection<UserSubmission> findAllSubs();


}
