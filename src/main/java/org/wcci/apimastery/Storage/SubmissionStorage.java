package org.wcci.apimastery.Storage;

import org.wcci.apimastery.Model.UserSubmission;
import java.util.Collection;
import java.util.Optional;

public interface SubmissionStorage {

    Collection<UserSubmission> findAllSubs();
    Optional<UserSubmission> findSubById(Long id);
    void store(UserSubmission submissionToAdd);


}
